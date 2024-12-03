import { describe, expect, test } from 'vitest';
import { toSlug } from '../toSlug';

describe('toSlug', () => {
  test('converts basic strings to kebab-case', () => {
    expect(toSlug('Hello World')).toBe('hello-world');
    expect(toSlug('hello world')).toBe('hello-world');
    expect(toSlug('HELLO WORLD')).toBe('hello-world');
  });

  test('handles apostrophes', () => {
    expect(toSlug("Shannon's Law")).toBe('shannons-law');
    expect(toSlug("Moore's Law")).toBe('moores-law');
    expect(toSlug("Conway's Game")).toBe('conways-game');
  });

  test('handles special characters and multiple spaces', () => {
    expect(toSlug('Hello   World')).toBe('hello-world');
    expect(toSlug('Hello___World')).toBe('hello-world');
    expect(toSlug('Hello...World')).toBe('hello-world');
    expect(toSlug('Hello,World')).toBe('hello-world');
  });

  test('handles leading and trailing special characters', () => {
    expect(toSlug('  Hello World  ')).toBe('hello-world');
    expect(toSlug('--Hello World--')).toBe('hello-world');
    expect(toSlug('...Hello World...')).toBe('hello-world');
  });

  test('handles empty strings', () => {
    expect(toSlug('')).toBe('');
    expect(toSlug(' ')).toBe('');
    expect(toSlug('  ')).toBe('');
  });

  test('handles real examples from our stations', () => {
    expect(toSlug('Law of Increasing Modularity')).toBe('law-of-increasing-modularity');
    expect(toSlug('The Medium is the Message')).toBe('the-medium-is-the-message');
    expect(toSlug('General Systems Theory')).toBe('general-systems-theory');
    expect(toSlug('Increasing Modularity')).toBe('increasing-modularity'); // Basic slug behavior
  });
});
