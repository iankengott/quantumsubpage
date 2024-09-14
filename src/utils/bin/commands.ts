// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}.
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const cv = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening CV...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest.
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

// Banner
export const banner = (args?: string[]): string => {
  return `


  #
  #
  #  KKKKKKKKK    KKKKKKKMMMMMMMM               MMMMMMMM   SSSSSSSSSSSSSSS
  #  K:::::::K    K:::::KM:::::::M             M:::::::M SS:::::::::::::::S
  #  K:::::::K    K:::::KM::::::::M           M::::::::MS:::::SSSSSS::::::S
  #  K:::::::K   K::::::KM:::::::::M         M:::::::::MS:::::S     SSSSSSS
  #  KK::::::K  K:::::KKKM::::::::::M       M::::::::::MS:::::S
  #    K:::::K K:::::K   M:::::::::::M     M:::::::::::MS:::::S
  #    K::::::K:::::K    M:::::::M::::M   M::::M:::::::M S::::SSSS
  #    K:::::::::::K     M::::::M M::::M M::::M M::::::M  SS::::::SSSSS
  #    K:::::::::::K     M::::::M  M::::M::::M  M::::::M    SSS::::::::SS
  #    K::::::K:::::K    M::::::M   M:::::::M   M::::::M       SSSSSS::::S
  #    K:::::K K:::::K   M::::::M    M:::::M    M::::::M            S:::::S
  #  KK::::::K  K:::::KKKM::::::M     MMMMM     M::::::M            S:::::S
  #  K:::::::K   K::::::KM::::::M               M::::::MSSSSSSS     S:::::S
  #  K:::::::K    K:::::KM::::::M               M::::::MS::::::SSSSSS:::::S
  #  K:::::::K    K:::::KM::::::M               M::::::MS:::::::::::::::SS
  #  KKKKKKKKK    KKKKKKKMMMMMMMM               MMMMMMMM SSSSSSSSSSSSSSS
  #
  #
  #
  #
  #
  #
  #




Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
