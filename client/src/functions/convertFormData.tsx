export function convertFormToFormData(formData = new FormData(), data, parentKey = '') {
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const value = data[key];
            const formKey = parentKey ? `${parentKey}[${key}]` : key;

            if (value === undefined) {
                formData.append(formKey, '');
            }
            else if (value instanceof File || value instanceof Blob) {
                formData.append(formKey, value);
            }
            else if (Array.isArray(value)) {
                // Handle images array specially
                if (formKey === 'images') {
                    value.forEach((file, index) => {
                        formData.append(`${formKey}[]`, file);
                    });
                } else {
                    value.forEach((item, index) => {
                        if (typeof item === 'object' && item !== null) {
                            convertFormToFormData(formData, item, `${formKey}[${index}]`);
                        } else {
                            formData.append(`${formKey}[${index}]`, item ?? '');
                        }
                    });
                }
            }
            else if (typeof value === 'object' && value !== null) {
                convertFormToFormData(formData, value, formKey);
            }
            else {
                // Convert boolean values to strings
                if (typeof value === 'boolean') {
                    formData.append(formKey, value ? '1' : '0');
                } else {
                    formData.append(formKey, value);
                }
            }
        }
    }
    return formData;
}