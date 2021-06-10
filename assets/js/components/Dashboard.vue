<template>
  <div class="ma-12 pa-12">
    <v-card>
      <v-navigation-drawer
        permanent
        expand-on-hover
        class="max-height"
      >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar size="30">
              <v-img src="https://sun9-64.userapi.com/impg/-RgbD3moNHg49DxjkMCm9oYjjicy5-Y3GNMEjg/Rh_Ul6VcTY4.jpg?size=820x1080&quality=96&sign=9f28349e1c539a02e3e5654b4822c504&type=album"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Константин Штыков
              </v-list-item-title>
              <v-list-item-subtitle>konstantine.shtikov@yandex.ru</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>{{ mdiAccount }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Профиль</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>{{ mdiAccountMultiple }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Пользователи</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>{{ mdiStar }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Избранные</v-list-item-title>
          </v-list-item>
        </v-list>

		<v-divider></v-divider>

		<v-list
          nav
          dense
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>{{ mdiLogout }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
				<strong class="red--text text--lighten-1">Выход</strong>
			</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
	import { mdiAccount, mdiAccountMultiple, mdiStar, mdiLogout } from '@mdi/js';
	
	export default {
		name: "Dashboard",
		data () {
			return {
				mdiAccount,
				mdiAccountMultiple,
				mdiStar,
				mdiLogout,
			}
		}
	}
</script>

<style scoped>
    .max-height {
        min-height: 100vh;
    }
</style>