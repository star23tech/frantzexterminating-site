document.documentElement.classList.add('js');

// Demo contact form: compose an email so the form works on static hosting
// without a backend. No data is sent anywhere except the visitor's own mail app.
var form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(form);
    var name = (data.get('name') || '').toString().trim();
    var phone = (data.get('phone') || '').toString().trim();
    var service = (data.get('service') || '').toString();
    var message = (data.get('message') || '').toString().trim();

    var subject = 'Pest service request' + (name ? ' — ' + name : '');
    var body =
      'Name: ' + name + '\n' +
      'Phone: ' + phone + '\n' +
      'Service: ' + service + '\n\n' +
      (message || '(no details provided)');

    window.location.href =
      'mailto:Billy@FrantzExt.com' +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);
  });
}
