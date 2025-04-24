export function encodeBase64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

export function decodeBase64(str) {
  try {
    return decodeURIComponent(escape(atob(str)));
  } catch {
    return str;
  }
}

export function encodeHex(str) {
  return Array.from(str).map(c => c.charCodeAt(0).toString(16)).join('');
}

export function decodeHex(str) {
  try {
    return str.match(/.{1,2}/g).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
  } catch {
    return str;
  }
}

export function rot13(str) {
  return str.replace(/[a-zA-Z]/g, function (c) {
    return String.fromCharCode(
      c.charCodeAt(0) + (c.toLowerCase() < 'n' ? 13 : -13)
    );
  });
}

export function reverse(str) {
  return str.split('').reverse().join('');
}
