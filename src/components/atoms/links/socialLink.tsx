const LinkWithIcon = ({ href, icon: Icon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        <Icon style={{ fontSize: "1.5rem" }} />
    </a>
);

export default LinkWithIcon;