Boolean(0);
// false

Boolean(1);
// true

Boolean(null);
// false

Boolean(NaN);
// false

Boolean(undefined);
// false

Boolean(false);
// false

Boolean(true);
// true

Boolean("");
// false

Boolean("a");
// true

Boolean([]);
// true

Boolean({});
// true

Boolean(function () { });
// true