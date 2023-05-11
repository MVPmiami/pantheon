<script setup lang="ts">
import languages from '../../assets/lang/languages.json';
import { computed } from 'vue';
import { useStore } from '../../../node_modules/vuex';

const store = useStore()
const languageStatus = computed(() => store.getters.languageStatus)
</script>

<template>
    <div :class="[$style.wrapper, $style.container]">
        <div :class="$style.pantheonWrapper">
            <div :class="$style.pantheonTextWrapper">
                <h2 :class="$style.headerPantheon">{{ languageStatus === "EN" ? languages.EN.text.previewText.headers.name :
                    languages.RU.text.previewText.headers.name }}</h2>
                <p :class="$style.textPantheon">{{ languageStatus === "EN" ? languages.EN.text.previewText.pantheon :
                    languages.RU.text.previewText.pantheon }}</p>
            </div>
            <img :class="$style.pantheonImg" src="./../../assets/images/ram1.png" />
        </div>
        <div :class="$style.pantheonWrapper">
            <img :class="$style.pantheonImg" src="./../../assets/images/ram2.png" />
            <div :class="$style.whatispantheonTextWrapper">
                <h2 :class="$style.headerPantheon">{{ languageStatus === "EN" ?
                    languages.EN.text.previewText.headers.whatispantheon :
                    languages.RU.text.previewText.headers.whatispantheon }}</h2>
                <p :class="$style.textPantheon">{{ languageStatus === "EN" ? languages.EN.text.previewText.whatispantheon :
                    languages.RU.text.previewText.whatispantheon }}</p>
            </div>
        </div>
        <div :class="$style.pantheonWrapper">
            <div :class="$style.advantureTextWrapper">
                <h2 :class="$style.headerPantheon">{{ languageStatus === "EN" ?
                    languages.EN.text.previewText.headers.advanture :
                    languages.RU.text.previewText.headers.advanture }}</h2>
                <p :class="$style.textPantheon">{{ languageStatus === "EN" ? languages.EN.text.previewText.advanture :
                    languages.RU.text.previewText.advanture }}</p>
            </div>
            <img :class="$style.pantheonImg" src="./../../assets/images/ram3.png" />
        </div>
    </div>
</template>

<style lang="scss" module>
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: $light;
    background-color: #0b11246b;
    text-align: center;
    font-size: 2.4rem;
    font-family: $font-family-ru;
    width: 126rem;
    //padding: 0rem 4rem;

    h2 {
        color: $orange;
        font-size: 4rem;
    }

    p {
        line-height: 1.4;
        letter-spacing: 0.055rem;
        font-weight: 300;
    }

    .pantheonWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 126rem;

        .pantheonImg {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 39%;
            margin: 10rem auto 0rem;
        }

        .pantheonTextWrapper {
            width: 59rem;
            display: flex;
            justify-content: center;
            align-items: baseline;
            flex-direction: column;
            padding: 0rem 2rem;
            text-align: left;
            position: relative;
        }

        .whatispantheonTextWrapper {
            width: 59rem;
            display: flex;
            justify-content: center;
            align-items: none;
            flex-direction: column;
            padding: 0rem 2rem;
            text-align: right;
        }

        .advantureTextWrapper {
            width: 59rem;
            display: flex;
            justify-content: center;
            align-items: baseline;
            flex-direction: column;
            padding: 0rem 2rem;
            text-align: left;
        }
    }
}

@media(max-width:1380px) {
    .wrapper {
        width: 86.5rem;
        position: relative;
        left: 0.3rem;

        .pantheonWrapper {
            flex-direction: column;

            .pantheonTextWrapper {
                align-items: center;

                p {
                    text-align: center;
                }
            }

            .pantheonImg {
                order: 2;
                margin: 3rem auto 3rem;
            }

            .advantureTextWrapper {
                order: 1;
                align-items: center;

                p {
                    text-align: center;
                }
            }

            .whatispantheonTextWrapper {
                order: 1;
                align-items: center;

                p {
                    text-align: center;
                }
            }
        }
    }

}

@media(max-width:980px) {
    .wrapper {
        width: 57rem;
        position: relative;
        left: -0.5rem;
        font-size: 1.8rem;

        h2 {
            font-size: 3.5rem;
        }

        p {
            padding: 0rem 5rem;
        }

        .pantheonWrapper {
            .pantheonImg {
                order: 2;
                margin: 3rem auto 3rem;
                width: 22%;
            }

            .pantheonTextWrapper {
                width: 38rem;
            }

            .whatispantheonTextWrapper {
                width: 38rem;
            }

            .advantureTextWrapper {
                width: 38rem;
            }
        }
    }
}

@media(max-width:680px) {
    .wrapper {
        width: 30rem;
        position: relative;
        left: 0rem;
        font-size: 1.8rem;

        h2 {
            font-size: 3rem;
        }

        p {
            padding: 0rem 5rem;
        }
    }
}
</style>