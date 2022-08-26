export function handleMaskCPF(event) {
    let { value } = event.target;

    event.currentTarget.maxLength = 18;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{4})(\d{1,2})$/, "$1-$2");
    value = value.replace(/(\d{3})(\d)/, "$1/$2");

    event.currentTarget.value = value;
}
