const ACTIONS = [
  { action: "validatePayload", error: "", message: "" },
  { action: ["freezeBuyerBalance", "freezeGoodStock"], error: "", message: "" }
];

function invokeAction(action, payload) {}

module.exports = async (ctx, next) => {
  const { user } = ctx.state;
  const { payload: data } = ctx.request.body;

  console.log(user, data);

  for (let { action, error, message } of ACTIONS) {
    const actions = Array.isArray(action) ? action : [action];
  }

  ctx.unauthorized(`You're not allowed to perform this action!`);
};
