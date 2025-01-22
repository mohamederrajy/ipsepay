// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      user: {
        email: string;
        [key: string]: any;
      } | null;
      token: string | null;
    }
    // interface PageData {}
    // interface Platform {}
  }
}

// declare global "glightbox";

export { }
