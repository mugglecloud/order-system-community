const requireLocal = (id) => {
  const ret = [];
  try {
    ret[0] = require(`./command/${id.replace(/\./g, "/")}`);
  } catch (e) {
    ret[1] = e;
  }
  return ret;
};

module.exports = async (ctx, next) => {
  const { type, payload } = ctx.request.body;

  let [fn, err] = requireLocal(type);

  if (err) {
    ctx.throw(404, err);
  } else {
    try {
      await fn(ctx, payload);

      // save to event source
      await next();
    } catch (e) {
      ctx.throw(409, e);
    }
  }
};
