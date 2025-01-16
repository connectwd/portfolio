const LinkWithIcon = ({ href, icon: Icon, aria }) => (
    <a href={href} target="_blank" aria-label={aria} rel="noopener noreferrer">
        <Icon style={{ fontSize: "1.5rem" }} />
    </a>
);

export default LinkWithIcon;