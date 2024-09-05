import * as React from 'react';
export declare const getRefElement: <T extends object>(element?: React.RefObject<Element> | T | null) => Element | T | undefined | null | React.RefObject<Element>;
type UseEventListenerProps = {
    type: keyof WindowEventMap;
    listener: EventListener;
    element?: React.RefObject<Element> | HTMLElement | Document | Window | null;
    options?: AddEventListenerOptions;
};
declare function useEventListener({ type, listener, element, options }: UseEventListenerProps): void;
export { useEventListener };
export type { UseEventListenerProps };
//# sourceMappingURL=use-event-listener.d.ts.map