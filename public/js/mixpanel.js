
define([], function() {
  mixpanel.load = function(user) {
    mixpanel.name_tag("" + user.name.first + " " + user.name.last);
    mixpanel.people.identify(user.email);
    return mixpanel.people.set({
      "$email": user.email,
      "$last_login": new Date(),
      "$first_name": user.name.first,
      "$last_name": user.name.last,
      "$username": user.bun,
      title: user.title
    });
  };
  return mixpanel;
});
