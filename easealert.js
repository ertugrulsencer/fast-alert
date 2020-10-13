window.addEventListener('load', () => {
    let easeAlertArea = document.createElement('div');
    easeAlertArea.id = 'easeAlertArea';
    document.body.appendChild(easeAlertArea);
});
function easeAlert(config) {
    let easeAlert = document.createElement('div');
    let icon = 'danger';
    easeAlert.className = 'ease-alert active ' + config.type;
    switch (config.type) {
        case 'danger':
            icon = 'times';
            break;
        case 'warning':
            icon = 'exclamation';
            break;
        case 'info':
            icon = 'info';
            break;
        case 'success':
            icon = 'check';
            break;
        default:
            icon = 'info';
            break;
    }
    if (config.closeBtn) {
        easeAlert.innerHTML = '<div class="ease-alert-icon"><i class="fas fa-' + icon + '-circle"></i></div><div class="ease-alert-desc"><strong class="title">' + config.title + ':</strong>&nbsp;' + config.desc + '</div><a href="javascript:void(0);" class="ease-alert-times"><i class="fas fa-times"></i></a>';
    } else {
        easeAlert.innerHTML = '<div class="ease-alert-icon"><i class="fas fa-' + icon + '-circle"></i></div><div class="ease-alert-desc"><strong class="title">' + config.title + ':</strong>&nbsp;' + config.desc + '</div>';
    }
    easeAlertArea.appendChild(easeAlert);
    document.querySelectorAll('.ease-alert-times').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.classList.remove('active');
            btn.parentElement.classList.add('hide');
            setTimeout(() => {
                btn.parentElement.remove();
            }, 1000);
        });
    });
    setTimeout(() => {
        easeAlert.classList.remove('active');
        easeAlert.classList.add('hide');
        setTimeout(() => {
            easeAlert.remove();
        }, 1000);
    }, config.time);
}