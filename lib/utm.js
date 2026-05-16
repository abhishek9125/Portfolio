const UTM_STORAGE_KEY = 'portfolio_attribution';

export function captureUtmFromUrl() {
    if (typeof window === 'undefined') return null;

    const params = new URLSearchParams(window.location.search);
    const hasUtm =
        params.get('utm_source') ||
        params.get('utm_medium') ||
        params.get('utm_campaign') ||
        params.get('ref');

    if (!hasUtm && !document.referrer) return null;

    const payload = {
        utm_source: params.get('utm_source') || null,
        utm_medium: params.get('utm_medium') || null,
        utm_campaign: params.get('utm_campaign') || null,
        ref: params.get('ref') || null,
        referrer: document.referrer || null,
        landing_page: window.location.pathname,
        captured_at: new Date().toISOString(),
    };

    try {
        sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(payload));
    } catch {
        // sessionStorage unavailable
    }

    return payload;
}

export function getStoredUtm() {
    if (typeof window === 'undefined') return null;

    try {
        const raw = sessionStorage.getItem(UTM_STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
}

export function formatUtmForMessage(utm) {
    if (!utm) return '';
    const parts = [
        utm.utm_source && `source: ${utm.utm_source}`,
        utm.utm_medium && `medium: ${utm.utm_medium}`,
        utm.utm_campaign && `campaign: ${utm.utm_campaign}`,
        utm.ref && `ref: ${utm.ref}`,
        utm.referrer && `referrer: ${utm.referrer}`,
        utm.landing_page && `landing: ${utm.landing_page}`,
    ].filter(Boolean);

    return parts.length ? `\n\n[Attribution]\n${parts.join('\n')}` : '';
}
