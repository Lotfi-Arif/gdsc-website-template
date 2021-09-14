export const style = `
kk-heaedr {
  width: 100%;
}

header {
  background: var(--surface1);
  filter: drop-shadow(var(--shadow-around-level-2) #000000);
}
header section {
  padding: var(--spacing-l);
}
header section .logo-title {
  display: flex;
  align-items: center;
  padding-left: calc(50% - (64px / 2));
  transition: all var(--default-duration) var(--ease-in-out-quint);
  transition-property: padding-left, transform;
}
header section .logo-title h1 {
  flex: 0;
  margin: 0;
  opacity: 0;
  display: inline;
  visibility: hidden;
  font-size: var(--font-size-l);
  padding-left: var(--spacing-l);
  transition: all var(--long-duration) var(--ease-in-out-quint);
  transition-property: visibility, opacity;
}
header nav {
  display: flex;
  width: 100%;
}
header nav kk-tabs {
  width: 100%;
  transition: padding-left var(--default-duration) var(--ease-in-out-quint);
}

@media (min-width: 768px) {
  header section .logo-title {
    padding-left: var(--spacing-l);
    transform: translateY(calc(3rem / 2));
  }
  header section .logo-title kk-icon {
    padding: 0 1rem 0 2rem;
  }
  header section .logo-title h1 {
    width: 100%;
    flex: 1;
    opacity: 1;
    visibility: visible;
  }
  header kk-tabs {
    padding-left: 50%;
  }
}
@media (min-width: 1300px) {
  header kk-tabs {
    padding-left: 67%;
  }
}
`;