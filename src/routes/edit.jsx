import {
    Form,
    useLoaderData,
    redirect,
    useNavigate,
  } from "react-router-dom";
import { updateContact } from "../contacts";

export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
  }
    
  
export default function EditContact() {
  const { contact } = useLoaderData();
  const navigate = useNavigate();

  return (
    <Form method="post" id="contact-form">
      <label>
        <span>Username</span>
        <input
          placeholder="username"
          aria-label="username"
          type="text"
          name="username"
          defaultValue={contact.username}
        />
      </label>
      <label>
        <span>Email</span>
        <input
          type="text"
          name="email"
          placeholder="@jack"
          defaultValue={contact.email}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          defaultValue={contact.notes}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </button>
      </p>
    </Form>
  );
}
