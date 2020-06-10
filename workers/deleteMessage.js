module.exports = {
  function(msg) {
    msg.delete({
      timeout: 5000,
    });
  },
};
