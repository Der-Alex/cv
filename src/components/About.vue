<script setup>
import { ref } from 'vue';
import ContactItem from '@/components/ContactItem.vue';

const contact = ref({
  icon: 'line-md:person-twotone',
  text: [
    'Geboren am 26.02.1984 in Dortmund',
    'Staatsangehörigkeit: deutsch',
    'Verheiratet, 2 Kinder',
    'Schulabschluss: Abitur',
  ],
  type: 'text',
});
</script>

<template>
  <div class="about">
    <h2>Über mich</h2>
    <ContactItem
      :icon="contact.icon"
      :text="contact.text"
      :type="contact.type"
    />
    <p class="text-sm sm:text-base">
      Seit 2007 arbeite ich als Webentwickler mit dem Schwerpunkt
      Frontend-Entwicklung. Neben der Planung, Organisation, Entwicklung und
      Pflege moderner Webanwendungen beschäftige ich mich auch gelegentlich im
      Fullstack-Bereich oder mit DevOps-Aufgaben.
    </p>
    <p class="text-sm sm:text-base">
      Hauptsächlich bin ich für die Planung der Frontend-Architektur und die
      Umsetzung moderner Web-Designs verantwortlich. Mein Fokus liegt stets auf
      gut wartbarem Code, einer sehr guten Usability und
      Performance-Optimierung.
    </p>

    <p class="text-sm sm:text-base">
      Neben meiner fachlichen Expertise zeichne ich mich durch strukturierte
      Arbeitsweise und meine Teamfähigkeit aus. Die Arbeit mit
      interdisziplinären Teams unterstütze ich gerne mit meiner Erfahrung und
      meinem Verständnis für übergreifende Prozesse.
    </p>

    <p class="text-sm sm:text-base">
      In meiner Freizeit unternehme ich gerne Ausflüge mit der Familie, jogge
      viel und spiele leidenschaftlich gern Videospiele.
    </p>
  </div>
</template>
