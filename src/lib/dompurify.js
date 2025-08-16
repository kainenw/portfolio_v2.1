export default {
  sanitize(dirty = '') {
    return dirty
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/ on\w+="[^"]*"/gi, '');
  }
};
