export const AppString = {
  welcome: (date: Date) => `Welcome to Unix
      * Documentation: type the help command or comants to see the list of commands
      * Available 😎 
      * Management: https://github.com/webscopeio/react-console
      * Repo owner: webscopeio
      * Support: 00088116@uca.edu.sv
      booted ✨
      System information as of ${date.toLocaleDateString()} ${date.toLocaleTimeString()}
      System load: 0.0 Processes: 8 👌
      Usage of /: 0.4% of 250.98GB Users logged in: 0 👌
      Memory usage: 0% IPv4 address for eth0: 172.23.59.210 👌
      Swap usage: 0%
      0 updates can be installed immediately.
      0 of these updates are security updates.

      The list of available updates is more than a week old.
`,
} as const;
