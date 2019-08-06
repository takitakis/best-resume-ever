<template>
  <div class="resume">
    <div class="banner">
      <div class="banner__fullname">
        {{ person.name.first }} {{ person.name.middle }} {{ person.name.last }}
      </div>
      <div class="banner__position">{{ person.position }}</div>
      <div v-if="person.birth" class="banner__location">
        {{ lang.born }} {{ person.birth.year }} {{ lang.bornIn }}
        {{ person.birth.location }}
      </div>
    </div>

    <div class="content">
      <div class="content__left">
        <div class="section">
          <div class="section-headline">
            {{ lang.about }}
          </div>

          <div class="section-content section-content--plain">
            {{ person.about }}
            <br />
            <br />
            {{ person.knowledge }}
          </div>
        </div>

        <div v-if="person.skills" class="section">
          <div class="section-headline">
            {{ lang.skills }}
          </div>

          <div class="section-content-grid">
            <a
              v-for="(skill, index) in person.skills"
              class="grid-item"
              :key="index"
              :href="skill.url"
              target="_blank"
            >
              <span class="squarred-grid-item">
                {{ skill.name }}
              </span>
            </a>
          </div>
        </div>

        <div class="section">
          <div class="section-headline">
            {{ lang.contact }}
          </div>

          <div class="section-content section-content--plain">
            <div class="section-link">
              <i class="section-link__icon material-icons">business</i
              >{{ person.contact.street }}
            </div>

            <a class="section-link" :href="contactLinks.email" target="_blank">
              <i class="section-link__icon material-icons">mail</i
              >{{ person.contact.email }}
            </a>

            <div class="section-link">
              <i class="section-link__icon material-icons">phone</i
              >{{ person.contact.phone }}
            </div>

            <a
              v-if="person.contact.website"
              class="section-link"
              :href="person.contact.website"
              target="_blank"
            >
              <i class="section-link__icon fa fa-globe"></i
              >{{ person.contact.website }}
            </a>

            <a
              v-if="person.contact.linkedin"
              class="section-link"
              :href="contactLinks.linkedin"
              target="_blank"
            >
              <i class="section-link__icon fa fa-linkedin"></i
              >{{ person.contact.linkedin }}
            </a>

            <a
              v-if="person.contact.github"
              class="section-link"
              :href="contactLinks.github"
              target="_blank"
            >
              <i class="section-link__icon fa fa-github"></i
              >{{ person.contact.github }}
            </a>

            <a
              v-if="person.contact.medium"
              class="section-link"
              :href="contactLinks.medium"
              target="_blank"
            >
              <i class="section-link__icon fa fa-medium"></i
              >{{ person.contact.medium }}
            </a>
          </div>
        </div>
      </div>

      <div class="content__right">
        <div class="section">
          <div class="section-headline">
            <i class="section-headline__icon material-icons">work</i
            >{{ lang.experience }}
          </div>

          <div class="section-content">
            <div
              v-for="(experience, index) in person.experience"
              :key="index"
              class="section-content__item"
            >
              <span class="section-content__header">{{
                experience.position
              }}</span>
              <a
                class="section-content__subheader"
                :href="experience.website"
                target="_blank"
              >
                {{ experience.company }}
                <span class="section-content__plain">{{
                  experience.location
                }}</span>
              </a>

              <div class="section-content__text">
                {{ experience.timeperiod }}
              </div>
              <span class="section-content__text--light">{{
                experience.description
              }}</span>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-headline">
            <i class="section-headline__icon material-icons">school</i
            >{{ lang.education }}・その他職歴
          </div>

          <div class="section-content">
            <div
              v-for="(education, index) in person.education"
              class="section-content__item"
              :key="index"
            >
              <span class="section-content__header">
                {{ education.school }}
              </span>
              <a
                class="section-content__subheader"
                :href="education.website"
                target="_blank"
                >{{ education.degree }}</a
              >
              <span v-if="education.timeperiod" class="section-content__text">{{ 
                education.timeperiod 
              }}</span>
              <span v-if="education.description" class="section-content__text--light">{{ 
                education.description 
              }}</span>
            </div>
          </div>
        </div>

        <div v-if="person.contributions" class="section">
          <div class="section-headline">
            <i class="section-headline__icon fa fa-heart"></i
            >技術文章の翻訳チームを形成
          </div>

          <div class="section-content">
            <a
              v-for="(contribution, index) in person.contributions"
              class="section-content__item"
              :key="index"
              :href="contribution.url"
              target="_blank"
            >
              <span class="section-content__subheader">{{ 
                contribution.name 
              }}</span>
              <span class="section-content__text--light">{{ 
                contribution.description 
              }}</span>
            </a>
          </div>
        </div>

        <div v-if="person.projects" class="section">
          <div class="section-headline">
            <i class="section-headline__icon material-icons">code</i>開発中{{
              lang.projects
            }}
          </div>

          <div class="section-content">
            <a
              v-for="(project, index) in person.projects"
              :key="index"
              class="section-content__item"
              :href="project.url"
              target="_blank"
            >
              <span class="section-content__header"> {{ project.name }} </span>
              <span class="section-content__subheader">{{
                project.platform
              }}</span>
              <span class="section-content__text">
                {{ project.description }}
              </span>
            </a>
          </div>
        </div>

      </div>
    </div>

    <img class="picture" />
  </div>
</template>

<script>
import Vue from 'vue';
import { getVueOptions } from './options';

const name = 'my-resume';

export default Vue.component(name, getVueOptions(name));
</script>

<style lang="less" scoped>
@accent-color: #34495e;
@banner-color: #42b883;
@banner-height: 120px;
@picture-size: 120px;
@picture-offset: 35px;
@base-padding: 30px;
@left-column-width: 240px;

a {
  color: inherit;
  cursor: pointer;
  text-decoration-line: none;

  &:visited {
    color: inherit;
  }
}

.resume {
  position: relative;
  font-family: "Roboto" !important;
  font-size: 0.9em;
}

.picture {
  position: absolute;
  top: @banner-height - @picture-offset;
  left: @left-column-width + @base-padding * 2 - @picture-size / 2;
  height: @picture-size;
  width: @picture-size;
  border-radius: 50%;
  border: 5px solid @accent-color;
  content: url("../../resume/profile.jpeg");
  z-index: 2;
}

.banner {
  width: calc(100% - @base-padding * 2);
  height: @banner-height;
  padding: @base-padding;
  background-color: @banner-color;
  /*
    background-image: url('../../resume/banner.png');
    background-repeat: no-repeat;
    background-size: cover;
  */
  color: white;

  &__fullname {
    font-size: 32px;
  }

  &__position {
    font-size: 16px;
  }

  &__location {
    font-size: 12px;
  }
}

.content {
  display: flex;
  width: 100%;
  height: 100%;

  &__left,
  &__right {
    height: auto;
    // height: 100%;
    padding: @base-padding;
  }

  &__left {
    width: @left-column-width;
    color: rgba(255, 255, 255, 0.59);
    background-color: @accent-color;

    .section-headline {
      color: white;
    }
  }

  &__right {
    flex: 1;
  }
}

.section {
  margin: 20px 0;
}

.section-link,
.section-headline {
  display: flex !important;
  align-items: center;
  color: @accent-color;
  display: inline-block;
  font-size: 1.2em;
  margin: 8px 0;

  &__icon {
    margin-right: 8px;
    font-size: 1.4em;
  }
}

.section-link {
  font-size: 1.1em;
  color: rgba(255, 255, 255, 0.59) !important;

  &__icon {
    color: white;
  }
}

.section-content {
  margin-top: 5px;
  padding-left: 32px;
  font-size: 14px;

  &__item {
    display: block;
    margin-bottom: 30px;
  }

  &__header {
    display: block;
    font-size: 1.1em;
    font-weight: 500;
  }

  &__subheader {
    display: block;
    font-weight: 400;
    white-space: pre-line;
  }

  &__plain,
  &__text {
    display: block;
    font-size: 12px;
    white-space: pre-line;

    &--light {
      font-size: 12px;
      white-space: pre-line;
    }
  }

  &__plain {
    display: inline;
    font-weight: 300;
  }

  &__item-grid {
    flex: 1 1 0;
    margin-bottom: 5px;
    padding-right: 5px;
  }

  &--plain {
    padding: 0;
    white-space: pre-line;
  }
}

.section-content-grid {
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
  margin-bottom: 5px;
}

.grid-item {
  padding-right: 5px;
}

.squarred-grid-item {
  display: block;
  border: 1px solid white;
  color: white;
  margin-top: 5px;
  padding: 5px;
}
</style>
