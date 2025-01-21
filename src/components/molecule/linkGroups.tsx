import {
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import LinkWithIcon from "../atoms/links/socialLink";
import { socialLinks } from "src/config";

export default function SocialLinks() {
    return (
        <div className="flex text-lg gap-3 my-auto lg:gap-5 float-right transition-opacity duration-300 hover:opacity-90">
            <LinkWithIcon href={socialLinks.github.url} aria={socialLinks.github.lable}  icon={FaGithub} />
            <LinkWithIcon href={socialLinks.linkedin.url} aria={socialLinks.linkedin.lable} icon={FaLinkedinIn} />
            <LinkWithIcon href={socialLinks.email.url} aria={socialLinks.email.lable} icon={TfiEmail} />
        </div>
    );
}