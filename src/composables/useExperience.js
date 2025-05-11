import { ref } from 'vue';

export const useExperience = () => {
  const workExperience = ref([
    {
      date: 'seit 04/2025',
      company: 'ecostag GmbH',
      position: 'Senior Frontend-Entwickler',
      tasks: [
        {
          text: 'Weiterentwicklung der Stagedates Plattform, bestehend aus einem Promoter Bereich, einem Backoffice System und einer Buchungs-Plattform für Events',
          tools: '(Vue, SCSS)',
        },
      ],
    },
    {
      date: '06/2017 - 04/2025',
      company: 'bits & likes GmbH',
      position: 'Senior Frontend-Entwickler',
      tasks: [
        {
          text: 'Mitarbeit an einer Full-Service Lösung für einen Kunden aus der Sneaker-Branche: zwei Websites, zwei Apps, ein Admin-Dashboard, mehrere Backend-Services',
          tools: '(Vue, Nuxt, TypeScript, NestJs, GraphQL, React-Native)',
        },
        {
          text: 'Entwicklung einer Dashboard-Lösung für Redakteure eines großen dortmunder Medienhauses',
          tools: '(React)',
        },
        {
          text: 'Mitarbeit an der Entwicklung einer E-Commerce Lösung für einen großen Kunden im Bereich der Kunststofffertigung',
          tools: '(Nuxt, TYPO3, Shopware)',
        },
        {
          text: 'Mitarbeit an der Entwicklung einer Plattform für den Verkauf von individuell gefertigten 3D-Druckprodukten',
          tools: '(Nuxt, PHP)',
        },
        {
          text: 'Individualentwicklung und Beratung in weiteren Kundenprojekten',
          tools:
            '(Vue, Nuxt, React, SCSS, JavaScript, TypeScript, NestJs, GraphQL)',
        },
        {
          text: 'Individualentwicklung einer Plattform für Pferde-Inserate für einen der weltweit führenden Anbieter von Produkten für Pferde und Reiter',
          tools: '(PHP, Twig, SCSS, JavaScript)',
        },
      ],
    },
    {
      date: '09/2014 - 06/2017',
      company: 'KPS AG',
      position: 'Senior Frontend-Entwickler und Berater',
      tasks: [
        {
          text: 'Mitarbeit am Relaunch eines Hybris-basierten Webshops für einen führenden deutschen Kunden im Bereich Schmuckwaren',
          tools: '(Vue, JavaScript, jQuery, SCSS, JSF, JSTL)',
        },
        {
          text: 'Entwicklung des Mobile Frontends eines Hybris-basierten Webshops für einen großen Kunden im Bereich Elektronikwaren',
          tools: '(SASS, JavaScript, jQuery, jQuery Mobile)',
        },
        {
          text: 'Mitarbeit am Frontend-Relaunch eines Hybris-basierten Webshops für einen führenden europäischen Schuhhändler',
          tools: '(Vue, AngularJs, SCSS, jQuery JSF)',
        },
        {
          text: 'Kunden Workshops zu den Themen Frontend Optimierung, Shop Performance Optimierung, Google Pagespeed, SEO',
          tools: '',
        },
      ],
    },
    {
      date: '11/2007  - 09/2014',
      company: 'arvato direct services GmbH',
      position: 'Web- und Applikationsentwickler',
      tasks: [
        {
          text: 'Planung, Entwicklung und Wartung eines Telefonkonferenzsystems mit Schnittstelle zur digitalen Erstellung und Bearbeitung von Telefonkonferenzen',
          tools: '(WordPress, PHP, jQuery, Asterisk)',
        },
        {
          text: 'Entwicklung eines unternehmensinternen VoIP Softphones',
          tools: '(C#)',
        },
        {
          text: 'Entwicklung eines unternehmensinternen Chat-Client',
          tools: '(C#, XMPP, Jabber)',
        },
        {
          text: 'Webapplikation zur Schwellwertanalyse von Echtzeitdaten eines Service-Centers',
          tools: '(PHP, JavaScript)',
        },
        {
          text: 'Webapplikation zur Filterung, Auswertung und grafischen Aufwertung von Logdateien',
          tools: '(PHP, JavaScript)',
        },
      ],
    },
    {
      date: '06/2007 – 11/2007',
      company: 'Weiterbildung',
      position: 'Weiterbildungen PHP, MySQL, WordPress Theme Development',
      tasks: [],
    },
  ]);

  const educationExperience = ref([
    {
      date: '09/2004 - 06/2007',
      company: 'Informatik Roeing und Fritze GbR',
      position: 'Ausbildung zum Fachinformatiker / Anwendungsentwicklung',
      tasks: [
        { text: 'Schwerpunkt .NET C#', tools: '' },
        {
          text: 'Entwicklung einer Desktop Anwendung zur Analyse von Logdateien',
          tools: '',
        },
        {
          text: 'Entwicklung eines Desktop Widget zur Anzeige von Echtzeitdaten aus einer Oracle Datenbank',
          tools: '',
        },
        {
          text: 'Weiterentwicklung der unternehmenseigenen Website',
          tools: '',
        },
        { text: 'Pflege und Wartung des unternehmenseigenen Wiki', tools: '' },
        { text: 'Einführung eines Kunden Forums für Oracle XE', tools: '' },
        { text: 'MySQL / Oracle Datenbankadministration', tools: '' },
      ],
    },
    {
      date: '01/2004 - 04/2004',
      company: 'HWK Dortmund',
      position: 'Praktikum',
      tasks: [
        { text: 'Software Support', tools: '' },
        { text: 'Wartung der Linux- und Windows Betriebssysteme', tools: '' },
        { text: 'Hardware Support', tools: '' },
        { text: 'Netzwerk Support', tools: '' },
        {
          text: 'Einrichtung eines unternehmensinternen E-Mail Servers mit Open-Xchange',
          tools: '',
        },
      ],
    },
    {
      date: '01/2004 - 04/2004',
      company: 'FAW Dortmund',
      position:
        'IT Weiterbildungslehrgang der Fortbildungsakademie der Wirtschaft',
      tasks: [
        { text: 'Webentwicklung mit HTML, PHP, CSS, JavaScript', tools: '' },
        { text: 'Linux Server Administration', tools: '' },
        { text: 'Apache Webserver Administration', tools: '' },
        { text: 'NginX Webserver Administration', tools: '' },
        { text: 'Netzwerkmanagement', tools: '' },
        { text: 'IT-Projektmanagement', tools: '' },
      ],
    },
  ]);

  return {
    educationExperience,
    workExperience,
  };
};
