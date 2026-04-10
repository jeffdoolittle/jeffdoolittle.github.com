function hostnameLabel(src) {
  if (!src || typeof src !== 'string') return 'Embedded content';
  try {
    const host = new URL(src).hostname.toLowerCase();
    if (host.includes('youtube.com') || host.includes('youtu.be')) return 'YouTube video';
    if (host.includes('vimeo.com')) return 'Vimeo video';
    if (host.includes('soundcloud.com')) return 'SoundCloud audio player';
    return 'Embedded content from ' + host;
  } catch {
    return 'Embedded content';
  }
}

function walk(node, visitor) {
  if (!node || typeof node !== 'object') return;
  visitor(node);
  if (!Array.isArray(node.children)) return;
  for (const child of node.children) {
    walk(child, visitor);
  }
}

export default function rehypeIframeTitle() {
  return function transformer(tree) {
    walk(tree, (node) => {
      if (node.type !== 'element' || node.tagName !== 'iframe') return;
      const props = node.properties || (node.properties = {});
      const title = props.title;
      if (typeof title === 'string' && title.trim().length > 0) return;
      props.title = hostnameLabel(props.src);
    });
  };
}