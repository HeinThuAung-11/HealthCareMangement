import {Resend} from 'resend';

const resend = new Resend('re_hR23A23f_MTNJjBPvENLwYuCxJGmuxeeV');

export const sendEmail = async () => {
    return await resend.emails.send({
        from: 'you@example.com',
        to: 'user@gmail.com',
        subject: 'hello world',
        html: <strong>It wrokds</strong>
    })
}
