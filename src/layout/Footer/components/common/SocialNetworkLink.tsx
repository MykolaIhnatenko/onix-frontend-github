import ISocialNetworkLink from '../../interfaces/ISocialNetworkLink';
import LinkComponent from '../../../../components/Link/Link';

function SocialNetworkLink({
  href, component, label,
}: ISocialNetworkLink) {
  return (
    <LinkComponent
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      ariaLabel={label}
      absolute={false}
    >
      {component}
    </LinkComponent>
  );
}

export default SocialNetworkLink;
