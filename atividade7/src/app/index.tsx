import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import AlunoCard from "../components/AlunoCard";
import { lista } from "../data/alunos";

export default function Index() {
  const aprovados = lista.filter(
    (aluno) => (aluno.nota1 + aluno.nota2) / 2 >= 7
  ).length;
  const reprovados = lista.length - aprovados;

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <FlatList
        data={lista}
        keyExtractor={(aluno) => aluno.nome}
        renderItem={({ item }) => <AlunoCard aluno={item} />}
        contentContainerStyle={styles.conteudo}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.cabecalho}>
            <View style={styles.marcaLinha}>
              <View style={styles.marcaIcone}>
                <Text style={styles.marcaIconeTexto}>E</Text>
              </View>
              <Text style={styles.marcaTexto}>ESPAÇO DO ESTUDANTE</Text>
            </View>

            <Text style={styles.sobretitulo}>ACOMPANHAMENTO ESCOLAR</Text>
            <Text style={styles.titulo}>Lista de alunos</Text>
            <Text style={styles.descricao}>
              Acompanhe as notas, médias e resultados da turma em um só lugar.
            </Text>

            <Pressable
              accessibilityRole="button"
              style={({ pressed }) => [styles.botaoVeiculos, pressed && styles.botaoPressionado]}
              onPress={() => router.push("/lista-veiculos")}
            >
              <View style={styles.botaoIcone}>
                <Text style={styles.botaoIconeTexto}>↗</Text>
              </View>
              <View style={styles.botaoTextoGrupo}>
                <Text style={styles.botaoTitulo}>Explorar veículos</Text>
                <Text style={styles.botaoDescricao}>Abrir a segunda lista</Text>
              </View>
              <Text style={styles.botaoSeta}>→</Text>
            </Pressable>

            <View style={styles.resumoTituloLinha}>
              <Text style={styles.secaoTitulo}>Resumo da turma</Text>
              <Text style={styles.secaoLegenda}>ESTATÍSTICAS</Text>
            </View>
            <View style={styles.resumo}>
              <View style={styles.resumoCartao}>
                <Text style={styles.resumoNumero}>{lista.length}</Text>
                <Text style={styles.resumoRotulo}>Alunos</Text>
              </View>
              <View style={[styles.resumoCartao, styles.resumoAprovados]}>
                <Text style={[styles.resumoNumero, styles.numeroVerde]}>{aprovados}</Text>
                <Text style={styles.resumoRotulo}>Aprovados</Text>
              </View>
              <View style={[styles.resumoCartao, styles.resumoReprovados]}>
                <Text style={[styles.resumoNumero, styles.numeroVermelho]}>{reprovados}</Text>
                <Text style={styles.resumoRotulo}>Reprovados</Text>
              </View>
            </View>
            <View style={styles.listaTituloLinha}>
              <Text style={styles.secaoTitulo}>Estudantes</Text>
              <Text style={styles.secaoLegenda}>POR DESEMPENHO</Text>
            </View>
          </View>
        }
        ListFooterComponent={
          <View style={styles.rodape}>
            <View style={styles.rodapeLinha} />
            <Text style={styles.rodapeTexto}>FIM DA LISTA</Text>
            <Text style={styles.rodapeDescricao}>Todos os registros foram exibidos.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F6FA" },
  conteudo: { paddingHorizontal: 20, paddingBottom: 28 },
  cabecalho: { paddingTop: 16, paddingBottom: 8 },
  marcaLinha: { flexDirection: "row", alignItems: "center", marginBottom: 30 },
  marcaIcone: { width: 34, height: 34, borderRadius: 11, backgroundColor: "#F97316", alignItems: "center", justifyContent: "center", marginRight: 10 },
  marcaIconeTexto: { color: "#FFFFFF", fontSize: 19, fontWeight: "900" },
  marcaTexto: { color: "#475569", fontSize: 11, fontWeight: "800", letterSpacing: 2 },
  sobretitulo: { color: "#EA580C", fontSize: 11, fontWeight: "800", letterSpacing: 1.8, marginBottom: 8 },
  titulo: { fontSize: 32, lineHeight: 38, fontWeight: "900", color: "#172033", letterSpacing: -0.8 },
  descricao: { color: "#64748B", fontSize: 15, lineHeight: 23, marginTop: 9, marginBottom: 20 },
  botaoVeiculos: { flexDirection: "row", alignItems: "center", backgroundColor: "#172033", padding: 15, borderRadius: 18, marginBottom: 25, shadowColor: "#172033", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.15, shadowRadius: 10, elevation: 4 },
  botaoPressionado: { opacity: 0.86, transform: [{ scale: 0.99 }] },
  botaoIcone: { width: 42, height: 42, borderRadius: 13, backgroundColor: "#F97316", alignItems: "center", justifyContent: "center", marginRight: 12 },
  botaoIconeTexto: { color: "#FFFFFF", fontSize: 24, fontWeight: "700" },
  botaoTextoGrupo: { flex: 1 },
  botaoTitulo: { color: "#FFFFFF", fontSize: 15, fontWeight: "800" },
  botaoDescricao: { color: "#CBD5E1", fontSize: 12, marginTop: 3 },
  botaoSeta: { color: "#FDBA74", fontSize: 23, fontWeight: "700", marginLeft: 8 },
  resumoTituloLinha: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 12 },
  secaoTitulo: { color: "#172033", fontSize: 19, fontWeight: "800", letterSpacing: -0.3 },
  secaoLegenda: { color: "#94A3B8", fontSize: 9, fontWeight: "800", letterSpacing: 1.2 },
  resumo: { flexDirection: "row", gap: 10, marginBottom: 27 },
  resumoCartao: { flex: 1, backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: "#E8ECF3", borderRadius: 16, paddingVertical: 15, paddingHorizontal: 12 },
  resumoAprovados: { backgroundColor: "#F0FDF4", borderColor: "#DCFCE7" },
  resumoReprovados: { backgroundColor: "#FFF1F2", borderColor: "#FFE4E6" },
  resumoNumero: { color: "#172033", fontSize: 25, fontWeight: "900", letterSpacing: -0.5 },
  numeroVerde: { color: "#15803D" },
  numeroVermelho: { color: "#BE123C" },
  resumoRotulo: { color: "#64748B", fontSize: 11, fontWeight: "600", marginTop: 5 },
  listaTituloLinha: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 14 },
  rodape: { alignItems: "center", paddingTop: 14, paddingBottom: 8 },
  rodapeLinha: { height: 1, backgroundColor: "#E2E8F0", width: "100%", marginBottom: 18 },
  rodapeTexto: { color: "#94A3B8", fontSize: 10, fontWeight: "900", letterSpacing: 2 },
  rodapeDescricao: { color: "#94A3B8", fontSize: 12, marginTop: 6 },
});
