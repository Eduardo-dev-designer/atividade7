import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import VeiculoCard from "../components/VeiculoCard";
import { veiculos } from "../data/veiculos";

export default function ListaVeiculos() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <FlatList
        data={veiculos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VeiculoCard veiculo={item} />}
        contentContainerStyle={styles.conteudo}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.cabecalho}>
            <Pressable
              onPress={() => router.back()}
              style={({ pressed }) => [styles.voltar, pressed && styles.voltarPressionado]}
              accessibilityRole="button"
            >
              <Text style={styles.voltarSeta}>←</Text>
              <Text style={styles.voltarTexto}>VOLTAR PARA ALUNOS</Text>
            </Pressable>

            <View style={styles.marcaLinha}>
              <View style={styles.marcaIcone}>
                <Text style={styles.marcaIconeTexto}>V</Text>
              </View>
              <Text style={styles.marcaTexto}>GARAGEM URBANA</Text>
            </View>

            <Text style={styles.sobretitulo}>CATÁLOGO DE AUTOMÓVEIS</Text>
            <Text style={styles.titulo}>Encontre seu próximo carro.</Text>
            <Text style={styles.descricao}>
              Uma seleção de modelos para diferentes estilos e necessidades.
            </Text>

            <View style={styles.destaque}>
              <View style={styles.destaqueTexto}>
                <Text style={styles.destaqueRotulo}>NO CATÁLOGO</Text>
                <Text style={styles.destaqueNumero}>{veiculos.length.toString().padStart(2, "0")}</Text>
                <Text style={styles.destaqueDescricao}>modelos cadastrados</Text>
              </View>
              <View style={styles.destaqueGrafico}>
                <Text style={styles.carroIcone}>🚘</Text>
              </View>
            </View>

            <View style={styles.listaTituloLinha}>
              <Text style={styles.secaoTitulo}>Todos os veículos</Text>
              <View style={styles.contador}>
                <Text style={styles.contadorTexto}>{veiculos.length} itens</Text>
              </View>
            </View>
          </View>
        }
        ItemSeparatorComponent={() => <View style={styles.separador} />}
        ListFooterComponent={
          <View style={styles.rodape}>
            <View style={styles.rodapeLinha} />
            <Text style={styles.rodapeTexto}>VOCÊ CHEGOU AO FINAL</Text>
            <Text style={styles.rodapeDescricao}>Exibindo os {veiculos.length} veículos do catálogo.</Text>
            <Pressable
              onPress={() => router.back()}
              style={({ pressed }) => [styles.botaoFinal, pressed && styles.voltarPressionado]}
              accessibilityRole="button"
            >
              <Text style={styles.botaoFinalTexto}>← Voltar à lista de alunos</Text>
            </Pressable>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F3EF" },
  conteudo: { paddingHorizontal: 20, paddingBottom: 28 },
  cabecalho: { paddingTop: 10, paddingBottom: 8 },
  voltar: { flexDirection: "row", alignItems: "center", alignSelf: "flex-start", paddingVertical: 10, paddingRight: 12, marginBottom: 20 },
  voltarPressionado: { opacity: 0.65 },
  voltarSeta: { color: "#EA580C", fontSize: 21, fontWeight: "800", marginRight: 8 },
  voltarTexto: { color: "#64748B", fontSize: 10, fontWeight: "900", letterSpacing: 1.2 },
  marcaLinha: { flexDirection: "row", alignItems: "center", marginBottom: 27 },
  marcaIcone: { width: 36, height: 36, borderRadius: 12, backgroundColor: "#EA580C", alignItems: "center", justifyContent: "center", marginRight: 10 },
  marcaIconeTexto: { color: "#FFFFFF", fontSize: 19, fontWeight: "900" },
  marcaTexto: { color: "#44403C", fontSize: 11, fontWeight: "900", letterSpacing: 2.2 },
  sobretitulo: { color: "#C2410C", fontSize: 10, fontWeight: "900", letterSpacing: 1.7, marginBottom: 9 },
  titulo: { color: "#292524", fontSize: 34, lineHeight: 39, fontWeight: "900", letterSpacing: -1 },
  descricao: { color: "#78716C", fontSize: 14, lineHeight: 22, marginTop: 10, marginBottom: 20 },
  destaque: { backgroundColor: "#292524", borderRadius: 22, padding: 20, minHeight: 140, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 28, overflow: "hidden" },
  destaqueTexto: { flex: 1 },
  destaqueRotulo: { color: "#FDBA74", fontSize: 10, fontWeight: "900", letterSpacing: 1.8 },
  destaqueNumero: { color: "#FFFFFF", fontSize: 42, lineHeight: 48, fontWeight: "900", marginTop: 5 },
  destaqueDescricao: { color: "#D6D3D1", fontSize: 12, marginTop: 2 },
  destaqueGrafico: { width: 100, height: 100, borderRadius: 50, backgroundColor: "#44403C", alignItems: "center", justifyContent: "center", marginLeft: 10 },
  carroIcone: { fontSize: 44 },
  listaTituloLinha: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 16 },
  secaoTitulo: { color: "#292524", fontSize: 20, fontWeight: "900", letterSpacing: -0.4 },
  contador: { backgroundColor: "#FFEDD5", paddingHorizontal: 11, paddingVertical: 6, borderRadius: 20 },
  contadorTexto: { color: "#9A3412", fontSize: 11, fontWeight: "800" },
  separador: { height: 12 },
  rodape: { alignItems: "center", paddingTop: 22, paddingBottom: 8 },
  rodapeLinha: { height: 1, backgroundColor: "#E7E5E4", width: "100%", marginBottom: 20 },
  rodapeTexto: { color: "#A8A29E", fontSize: 10, fontWeight: "900", letterSpacing: 1.8 },
  rodapeDescricao: { color: "#A8A29E", fontSize: 12, marginTop: 7 },
  botaoFinal: { marginTop: 18, paddingHorizontal: 17, paddingVertical: 12, borderRadius: 12, backgroundColor: "#292524" },
  botaoFinalTexto: { color: "#FFFFFF", fontSize: 12, fontWeight: "800" },
});
