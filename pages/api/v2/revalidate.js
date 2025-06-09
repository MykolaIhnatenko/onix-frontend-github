export default async function handler(req, res) {
  const {
    headers: { secret },
    body: { path },
  } = req;

  if (secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    await res.revalidate(path);
    return res.json({ revalidated: true });
  } catch (_) {
    return res.json({ revalidated: false, message: 'page not find' });
  }
}
