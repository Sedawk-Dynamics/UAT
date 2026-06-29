/** POST a form payload to the SMTP-backed API route. Throws on failure so the
 *  caller can surface the mailto fallback. */
export async function submitForm(payload: Record<string, unknown>) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const json = (await res.json().catch(() => ({}))) as { error?: string };
    throw new Error(json?.error || "Submission failed");
  }
  return res.json();
}
