import { socialTabs } from "../../Data/navigationData";
import IconButton from "./IconButton";
import IconButtonGroup from "./IconButtonGroup";

type SocialButtonProps = {
    style?: React.CSSProperties;
    backgroundColor?: string;
    textColor?: string;
    hoverBackgroundColor?: string;
    hoverTextColor?: string;
};

/**
 * A group of social buttons
 */
const SocialButtons = (props: SocialButtonProps) => {
    return (
        <IconButtonGroup style={{ fontSize: "1.125rem", ...props.style }}>
            {socialTabs.map((socialTab) => {
                return (
                    <IconButton
                        icon={socialTab.icon}
                        backgroundColor={props.backgroundColor}
                        textColor={props.textColor}
                        hoverBackgroundColor={
                            socialTab.colorPrimary || props.hoverBackgroundColor
                        }
                        hoverTextColor={
                            socialTab.colorSecondary || props.hoverTextColor
                        }
                        href={socialTab.href}
                        openWithNewTab
                        key={socialTab.label}
                        title={socialTab.label}
                        aria-label={socialTab.label}
                    />
                );
            })}
        </IconButtonGroup>
    );
};

export default SocialButtons;
