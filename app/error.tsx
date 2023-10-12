'use client';

export default function ErrorWrapper({ error }: { error: Error }) {
  return (
    <>
      <h1>Oops... An error occured!</h1>
      <h2 className="error">{error.message}</h2>
    </>
  );
}
