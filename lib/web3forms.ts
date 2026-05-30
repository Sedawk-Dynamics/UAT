export const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

/** POST a payload to Web3Forms. Throws on non-OK so callers can show error UI. */
export async function submitWeb3Forms(payload: Record<string, unknown>) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...payload }),
  });
  if (!res.ok) {
    const json = (await res.json().catch(() => ({}))) as { message?: string };
    throw new Error(json?.message || "Submission failed");
  }
  return res.json();
}
