/** MUI COMPONENT  */
import IconButton from '@mui/material/IconButton';

/** TYPES & FUNCTIONS */
import type { FooterProps } from '../data/Types';
import { defaultAriaLabel, defaultColor, defaultRel, defaultTarget } from '../data/Functions';

/** */
const FooterButton = (props: FooterProps) => {
    return (
        <IconButton
            component='a'
            href={props.href}
            title={props.title}
            aria-label={defaultAriaLabel(props.ariaLabel)}
            color={defaultColor(props.color)}
            target={defaultTarget(props.type)}
            rel={defaultRel(props.type)}
        >
            <props.icon />
        </IconButton>
    );
};

export default FooterButton;
