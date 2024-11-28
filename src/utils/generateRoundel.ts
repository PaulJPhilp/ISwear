import type { RoundelProps,  RoundelPosition, RoundelLabelProps, RoundelCircleProps, RoundelRectangleProps, makeRoundelOptions } from '~/components/widgets/Roundel.astro';
import { TflColors } from '~/tflColors';

const MinimumFontSize = 6;

export function calcFontSize(size: number, text: string, defaultFontSize = 16) {

    if (text.length === 0) return '0px';

    if (defaultFontSize < MinimumFontSize) return `${MinimumFontSize}px`;

    const fSize = defaultFontSize;
    const textWidth = text.length * fSize * 1.2;
    if (textWidth > size) {
        return calcFontSize(size, text, defaultFontSize - 1);
    }
    return `${fSize}px`;
}

export type RoundelMap = Map<string, RoundelProps>;
const roundelMap: RoundelMap = new Map([]);

export function registerRoundel(type: string, roundel: RoundelProps) {
    roundelMap.set(type, roundel);
}

export function getRoundel(type: string): RoundelProps {
    const roundel = roundelMap.get(type);
    if (!roundel) throw new Error(`Unknown type: ${type}`);
    return roundel;
}

export function generateRoundel(type: string): RoundelProps {

    const roundel = roundelMap.get(type);
    if (!roundel) throw new Error(`Unknown type: ${type}`);

    return makeRoundel(
        roundel.size,
        { x: roundel.position.x, y: roundel.position.y },
        { text: roundel.label.text, fontSize: roundel.label.fontSize ?? '10px', fontWeight: roundel.label.fontWeight ?? 'normal', color: roundel.label.color ?? TflColors.tflWhite },
        { center: { x: roundel.innerCircle.center.x, y: roundel.innerCircle.center.y }, radius: roundel.innerCircle.radius, color: roundel.innerCircle.color ?? TflColors.tflWhite },
        { center: { x: roundel.outerCircle.center.x, y: roundel.outerCircle.center.x }, radius: roundel.outerCircle.radius, color: roundel.outerCircle.color ?? TflColors.tflWhite },
        { top: roundel.rect.top, left: 0, color: roundel.rect.color, width: roundel.rect.width, height: roundel.rect.height }
    );
}

export function makeRoundel(
    size: number,
    position: RoundelPosition,
    label: RoundelLabelProps,
    innerCircle: RoundelCircleProps,
    outerCircle: RoundelCircleProps,
    rect: RoundelRectangleProps,
    options?: makeRoundelOptions
): RoundelProps {
    const RoundelMargin = options?.margin ?? 0.25;
    const RoundelOuterCircleRatio = options?.outerCircleRatio ?? 0.8;
    const RoundelInnerCircleRatio = options?.innerCircleRatio ?? 0.6666666666;
    const RoundelRectHeightRatio = options?.rectHeightRatio ?? 0.15;
    const X = position.x ?? 0;
    const Y = position.y ?? 0;
    const Height = size * (1 + RoundelMargin);
    const Width = size * (1 + RoundelMargin);
    const RectWidth = size;
    const RectHeight = size * RoundelRectHeightRatio;

    const outerCircleRadius = (size * RoundelOuterCircleRatio) / 2;
    const strokeWidth = 1;

    const roundel: RoundelProps = {
        size: size,
        position: { x: X, y: Y },
        height: size * (1 + RoundelMargin),
        width: size * (1 + RoundelMargin),
        margin: size * RoundelMargin,

        innerCircle: {
            radius: outerCircleRadius * RoundelInnerCircleRatio,
            color: innerCircle.color,
            center: { x: X + Height / 2, y: Y + Width / 2 },
        },

        outerCircle: {
            radius: outerCircleRadius,
            color: outerCircle.color,
            center: { x: X + Height / 2, y: Y + Width / 2 },
        },

        rect: {
            width: size,
            height: RectHeight,
            top: Y + Height / 2 - RectHeight / 2,
            left: X + Width / 2 - RectWidth / 2,
            color: rect.color,
            border: {
                strokeWidth: strokeWidth,
                stroke: rect.border?.stroke ?? rect.color,
            },
        },

        label: {
            text: label.text,
            color: label.color,
            fontSize: label.fontSize ?? calcFontSize(size * (1 + RoundelMargin), label.text),
            fontWeight: label.fontWeight ?? 'normal',
        },
    };

    return roundel;
}