const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) => {
    const allEmails = emails
        .split(',')
        .map(email => email.trim())
        .filter(email => {
            if (email.length === 0) {
                return false;
            } else {
                return true;
            }
        });

    const invalidEmails = allEmails
        .filter(email => !re.test(email) );

    if (invalidEmails.length) {
        return `These emails are invalid: ${invalidEmails}`;
    }

    return;
};