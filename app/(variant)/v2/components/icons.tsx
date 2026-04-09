type IconProps = {
  className?: string;
};

export function SparkIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M13 2 6.5 13h4L9 22l8.5-11h-4L13 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TagIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m20 12-8 8-9-9V4h7l10 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="8.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function BrushIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M9 15c-3 0-5 2-5 5 3 0 5-2 5-5Zm1-1 8.5-8.5a2.12 2.12 0 0 0-3-3L7 11v3h3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MobileIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect
        x="7"
        y="2"
        width="10"
        height="20"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M11 18h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function SupportIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 13v-1a8 8 0 1 1 16 0v1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="3" y="12" width="4" height="7" rx="2" stroke="currentColor" strokeWidth="2" />
      <rect x="17" y="12" width="4" height="7" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M12 19v2h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CodeIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m8 8-4 4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m16 8 4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m14 4-4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function LayoutIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 10h18M9 10v10" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function BriefcaseIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 12h18" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function GlobeIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function MailIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SettingsIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 8.5A3.5 3.5 0 1 0 12 15.5A3.5 3.5 0 1 0 12 8.5Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a2 2 0 1 1-4 0v-.1a1 1 0 0 0-.6-.9 1 1 0 0 0-1.1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H4a2 2 0 1 1 0-4h.1a1 1 0 0 0 .9-.6 1 1 0 0 0-.2-1.1l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1 1 0 0 0 1.1.2 1 1 0 0 0 .6-.9V4a2 2 0 1 1 4 0v.1a1 1 0 0 0 .6.9 1 1 0 0 0 1.1-.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1 1 0 0 0-.2 1.1 1 1 0 0 0 .9.6H20a2 2 0 1 1 0 4h-.1a1 1 0 0 0-.9.6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SearchIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
      <path d="m20 20-4.2-4.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ShieldIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3 5 6v6c0 5 3.5 8 7 9 3.5-1 7-4 7-9V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="m9.5 12 1.5 1.5 3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowGrowthIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m7 17 10-10M10 7h7v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RestaurantIcon({ className = 'h-8 w-8' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 3v7M9 3v7M6 7h3M16 3v18M19 3c0 4-1 6-3 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PortfolioIcon({ className = 'h-8 w-8' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M10 13a3 3 0 1 0 4 0M4 12a8 8 0 1 1 16 0M3 21l5-5M21 21l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function BuildingIcon({ className = 'h-8 w-8' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 21h18M6 21V7l6-3v17M18 21V11l-6-2M9 9h.01M9 13h.01M9 17h.01M15 13h.01M15 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RocketMark({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 19c3-1 5-3 6-6l6-6a4.2 4.2 0 0 0-6-6l-6 6c-3 1-5 3-6 6l4 0 0 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="14.5" cy="9.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function WhatsAppIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.601 2.326A7.854 7.854 0 0 0 8.034 0C3.64 0 .067 3.574.067 7.965c0 1.409.369 2.783 1.07 3.993L0 16l4.142-1.084A7.94 7.94 0 0 0 8.032 16h.003c4.393 0 7.966-3.574 7.966-7.965A7.93 7.93 0 0 0 13.601 2.326zM8.034 14.66a6.62 6.62 0 0 1-3.378-.92l-.242-.145-2.457.644.656-2.39-.157-.245a6.617 6.617 0 0 1-1.017-3.543c.003-3.65 2.972-6.618 6.633-6.618a6.6 6.6 0 0 1 4.692 1.943 6.6 6.6 0 0 1 1.94 4.694c-.003 3.648-2.972 6.62-6.63 6.62z" />
      <path d="M11.649 9.726c-.197-.099-1.17-.578-1.353-.644-.182-.066-.315-.099-.448.1-.132.197-.513.644-.628.776-.116.132-.231.149-.43.05-.197-.1-.833-.306-1.587-.977-.587-.523-.984-1.168-1.1-1.366-.115-.197-.012-.304.087-.402.089-.088.197-.231.296-.347.099-.115.132-.197.198-.33.066-.132.033-.248-.017-.347-.05-.099-.448-1.08-.612-1.48-.16-.387-.323-.334-.448-.34a7.216 7.216 0 0 0-.38-.007c-.132 0-.347.05-.53.248-.182.197-.694.677-.694 1.653 0 .975.71 1.917.81 2.05.099.132 1.394 2.128 3.383 2.986.473.205.84.327 1.127.418.474.15.905.129 1.246.078.38-.057 1.17-.479 1.336-.942.165-.462.165-.859.116-.942-.05-.083-.182-.132-.38-.231z" />
    </svg>
  );
}

export function SocialIcon({
  label,
  className = 'h-4 w-4',
}: IconProps & { label: 'facebook' | 'instagram' | 'twitter' }) {
  if (label === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M14 8h2V4h-2a4 4 0 0 0-4 4v2H8v4h2v6h4v-6h2.5l.5-4H14V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (label === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.9 2.7c0 .3 0 .6.1.9A11.4 11.4 0 0 1 3.5 4.8a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.7-.5 0 1.9 1.4 3.6 3.3 4-.3.1-.7.1-1 .1-.3 0-.5 0-.8-.1.5 1.6 2 2.7 3.8 2.8A8.1 8.1 0 0 1 2 18.1 11.5 11.5 0 0 0 8.3 20c7.5 0 11.6-6.3 11.6-11.7v-.5c.8-.6 1.5-1.2 2.1-2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
