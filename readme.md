#Consideraciones para ejecutar para android studio
-se instalo @capacitor/android
-se actualizo capacitor/cli a la version 4.7.3
-npx cap add android (se agrega a android)
-Mostrara un Warning
-ejecutar ng build generara la carpeta www
-npx cap sync (sincroniza con los archivos que se necesita para agregarlos a android)
-npx cap open android (abre el proyecto generado para android en android studio)
-escaneara el proyecto si es la primera vez
-ejecutar el proyecto ya sea con un emulador o con un dispositivo fisico (debe estar ahbilitar el modo desarrollador y habilitado la depuracion por USB)

#ejecucion de proyecto con live reload
se instalo la version jdk-11.0.17_windows-x64_bin del jdk por problemas con el gradle
-ionic cap run android -l --host=192.168.100.30
