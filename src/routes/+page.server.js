export const formDataToObject = (formData) => {
    let newObj = {};
    formData.forEach((value, key) => (newObj[key] = value));
    return newObj;
}

export const actions = {
    post: async ({ request }) => {
        const data = formDataToObject(await request.formData());
        console.log(data);
    }
}