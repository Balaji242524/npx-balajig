#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";

const options = {
  title: "👑 Hii User! 👑",
  titleAlignment: "center",
  borderStyle: "round",
  width: 75,
  padding: 1,
  borderColor: "#A7FF83",
};

const data = {
  intro: chalk
    .hex("#FFFADD")
    .bold("I'm Balaji G, your friendly Web developer."),
  roles: chalk.hex("#97FFF4")(
    "FrontEnd Developer | UI/UX Designer | PreFinal BTech IT"
  ),
  twitter:
    chalk.white.bold("https://twitter.com/") + chalk.cyan("balajig024"),
  github: chalk.white.bold("https://github.com/") + chalk.green("Balaji242524"),
  linkedin:
    chalk.white.bold("https://linkedin.com/in/") + chalk.blue("balajig024"),
  Mail: chalk.cyan("balaji.g2022it@sece.ac.in"),
  Portfolio:
    chalk.white.bold("https://") + chalk.hex("#97FFF4")("balajig.netlify.app"),
  labelTwitter: chalk.bgHex("#FFF").hex("#00acee").bold("    Twitter"),
  labelGitHub: chalk.bgBlack.white.bold("     GitHub"),
  labelLinkedIn: chalk.bgHex("#0072b1").hex("#fef9f3").bold("   LinkedIn"),
  labelWeb: chalk.bgHex("#FFE7CE").hex("#071A52").bold("       Mail"),
  labelPortfolio: chalk.bgHex("#9400FF").hex("#fef9f3").bold("  Portfolio"),
};

const newline = "\n";
const introduction = `${data.intro}`;
const roles = `${data.roles}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.Mail}`;
const portfolio = `${data.labelPortfolio}  ${data.Portfolio}`;

const output =
  newline +
  newline +
  newline +
  introduction +
  newline +
  roles +
  newline +
  newline +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  portfolio +
  newline +
  newline +
  newline;

console.log(boxen(chalk.white(output), options));
