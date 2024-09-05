import * as React from 'react';
import { AfterpayContext, AfterpayProvider } from '../../contexts/afterpay';
import type { AfterpayButtonProps, AfterpayMessageBaseProps, AfterpayMessageCustomComponentProps, AfterpayWidgetProps } from './afterpay.types';
export declare function AfterpayButton({ Button, buttonColor, buttonType, finalCtaButtonType, id, ...props }: AfterpayButtonProps): React.JSX.Element;
export declare function AfterpayMessage(props: AfterpayMessageBaseProps): JSX.Element;
export declare function AfterpayMessage(props: AfterpayMessageCustomComponentProps): JSX.Element;
export declare function AfterpayWidget({ includeBranding, id, ...props }: AfterpayWidgetProps): React.JSX.Element;
declare function Afterpay(props: AfterpayButtonProps): React.JSX.Element;
export { AfterpayContext, AfterpayProvider };
export default Afterpay;
export * from './afterpay.types';
//# sourceMappingURL=afterpay.d.ts.map