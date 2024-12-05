// Custom event for debug state changes
const DEBUG_STATE_CHANGE = 'debug-state-change';

export class DebugState {
  private static instance: DebugState;
  private _isEnabled: boolean = false;

  private constructor() {
    // Initialize from localStorage if available
    if (typeof window !== 'undefined') {
      this._isEnabled = localStorage.getItem('debug-state') === 'true';
    }
  }

  static getInstance(): DebugState {
    if (!DebugState.instance) {
      DebugState.instance = new DebugState();
    }
    return DebugState.instance;
  }

  get isEnabled(): boolean {
    return this._isEnabled;
  }

  set isEnabled(value: boolean) {
    this._isEnabled = value;
    if (typeof window !== 'undefined') {
      localStorage.setItem('debug-state', value.toString());
      // Dispatch event for components to update
      window.dispatchEvent(new CustomEvent(DEBUG_STATE_CHANGE, { detail: { isEnabled: value } }));
    }
  }

  toggle(): void {
    this.isEnabled = !this.isEnabled;
  }
}

// Export singleton instance
export const debugState = DebugState.getInstance();
export { DEBUG_STATE_CHANGE };
