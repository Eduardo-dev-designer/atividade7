import React from "react";
import { StyleSheet, Text, View } from "react-native";
import type { Veiculo } from "../types/Veiculo";

type Props = { veiculo: Veiculo };

const coresCategoria: Record<string, { fundo: string; texto: string }> = {
  Hatch: { fundo: "#DBEAFE", texto: "#1D4ED8" },
  Sedã: { fundo: "#EDE9FE", texto: "#6D28D9" },
  SUV: { fundo: "#D1FAE5", texto: "#047857" },
  Compacto: { fundo: "#FEF3C7", texto: "#92400E" },
};

export default function VeiculoCard({ veiculo }: Props) {
  const estiloCategoria = coresCategoria[veiculo.categoria] ?? {
    fundo: "#F5F5F4",
    texto: "#57534E",
  };

  return (
    <View style={styles.card}>
      <View style={styles.faixa} />
      <View style={styles.conteudo}>
        <View style={styles.tituloLinha}>
          <View style={styles.identificacao}>
            <Text style={styles.marca}>{veiculo.marca.toUpperCase()}</Text>
            <Text style={styles.modelo}>{veiculo.modelo}</Text>
          </View>
          <View style={[styles.categoria, { backgroundColor: estiloCategoria.fundo }]}>
            <Text style={[styles.categoriaTexto, { color: estiloCategoria.texto }]}>
              {veiculo.categoria}
            </Text>
          </View>
        </View>

        <View style={styles.divisor} />

        <View style={styles.detalhes}>
          <View style={styles.detalhe}>
            <Text style={styles.icone}>◷</Text>
            <View>
              <Text style={styles.rotulo}>ANO</Text>
              <Text style={styles.valor}>{veiculo.ano}</Text>
            </View>
          </View>
          <View style={styles.detalhe}>
            <View style={[styles.amostraCor, { backgroundColor: nomeCorParaHex(veiculo.cor) }]} />
            <View>
              <Text style={styles.rotulo}>COR</Text>
              <Text style={styles.valor}>{veiculo.cor}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function nomeCorParaHex(cor: string) {
  const cores: Record<string, string> = {
    Prata: "#A8A29E",
    Branco: "#FFFFFF",
    Vermelho: "#DC2626",
    Preto: "#292524",
    Cinza: "#78716C",
    Azul: "#2563EB",
    Verde: "#16A34A",
  };
  return cores[cor] ?? "#D6D3D1";
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E7E5E4",
    overflow: "hidden",
    shadowColor: "#292524",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  faixa: { width: 5, backgroundColor: "#EA580C" },
  conteudo: { flex: 1, padding: 16 },
  tituloLinha: { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", gap: 8 },
  identificacao: { flex: 1 },
  marca: { color: "#A8A29E", fontSize: 9, fontWeight: "900", letterSpacing: 1.5, marginBottom: 4 },
  modelo: { color: "#292524", fontSize: 21, lineHeight: 26, fontWeight: "900", letterSpacing: -0.5 },
  categoria: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 9, marginTop: 2 },
  categoriaTexto: { fontSize: 10, fontWeight: "900" },
  divisor: { height: 1, backgroundColor: "#F0EEEB", marginVertical: 15 },
  detalhes: { flexDirection: "row", gap: 28, flexWrap: "wrap" },
  detalhe: { flexDirection: "row", alignItems: "center", gap: 9 },
  icone: { color: "#EA580C", fontSize: 21, fontWeight: "800", width: 19, textAlign: "center" },
  amostraCor: { width: 16, height: 16, borderRadius: 8, borderWidth: 1, borderColor: "#D6D3D1", marginHorizontal: 1 },
  rotulo: { color: "#A8A29E", fontSize: 9, fontWeight: "900", letterSpacing: 1.3, marginBottom: 4 },
  valor: { color: "#57534E", fontSize: 13, fontWeight: "700" },
});
