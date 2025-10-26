export default {
  async fetch(req, env, ctx) {
    if (req.method !== "POST") return new Response("ok", { status: 200 });

    const cf = req.cf || {};
    let body = {};
    try { body = await req.json(); } catch {}

    const record = {
      site_id: body.siteId,
      kind: body.kind,
      url: body.url,
      path: body.path,
      referrer: body.referrer,
      lang: body.lang,
      time_on_page_sec: body.timeOnPageSec,
      max_scroll: body.maxScroll,
      country: cf.country,
      region: cf.region,
      city: cf.city
    };

    await fetch(env.SUPABASE_URL + "/rest/v1/visits", {
      method: "POST",
      headers: {
        "apikey": env.SUPABASE_KEY,
        "Authorization": "Bearer " + env.SUPABASE_KEY,
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
      },
      body: JSON.stringify(record)
    });

    return new Response("stored", { status: 200, headers: { "Access-Control-Allow-Origin": "*" } });
  }
};
