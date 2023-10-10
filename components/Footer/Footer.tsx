import s from './footer.module.css';

function Footer() {
  return (
    <footer className={`container ${s.footer}`}>
      Created by &copy; Kamajor {new Date().getFullYear()}
    </footer>
  );
}

export { Footer };
