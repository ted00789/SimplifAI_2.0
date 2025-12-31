const REFERRAL_SOURCE_KEY = 'referral_source';
const REFERRAL_SAVED_AT_KEY = 'referral_saved_at';

/**
 * Checks URL for ref parameter and saves to localStorage if present.
 * Does NOT overwrite existing referral unless a NEW ref is provided.
 */
export function trackReferral(): void {
  if (typeof window === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  const refParam = urlParams.get('ref');

  if (refParam && refParam.trim() !== '') {
    const existingRef = localStorage.getItem(REFERRAL_SOURCE_KEY);
    
    // Only save if no existing referral OR if a new different ref is provided
    if (!existingRef || existingRef !== refParam) {
      localStorage.setItem(REFERRAL_SOURCE_KEY, refParam);
      localStorage.setItem(REFERRAL_SAVED_AT_KEY, new Date().toISOString());
    }
  }
}

/**
 * Returns the saved referral source or null if none exists.
 */
export function getReferralSource(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(REFERRAL_SOURCE_KEY);
}

/**
 * Returns the timestamp when the referral was saved, or null if none exists.
 */
export function getReferralSavedAt(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(REFERRAL_SAVED_AT_KEY);
}

/**
 * Clears the stored referral data.
 */
export function clearReferral(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(REFERRAL_SOURCE_KEY);
  localStorage.removeItem(REFERRAL_SAVED_AT_KEY);
}
