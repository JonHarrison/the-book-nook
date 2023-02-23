const log_level = 0;
export const log = function () { if (log_level > 0) { console.log.apply(this, arguments); } }

