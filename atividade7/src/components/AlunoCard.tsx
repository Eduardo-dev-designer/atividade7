import React from "react";
import { StyleSheet, Text, View } from "react-native";
import type { Aluno } from "../types/Aluno";

type Props = { aluno: Aluno };

export default function AlunoCard({ aluno }: Props) {
  const media = (aluno.nota1 + aluno.nota2) / 2;
  const aprovado = media >= 7;
  const corSituacao = aprovado ? "#15803D" : "#BE123C";
  const fundoSituacao = aprovado ? "#DCFCE7" : "#FFE4E6";

  return (
    <View style={styles.card}>
      <View style={[styles.faixa, { backgroundColor: corSituacao }]} />
      <View style={styles.conteudo}>
        <View style={styles.cabecalho}>
          <View style={styles.avatar}>
            <Text style={styles.avatarTexto}>{iniciais(aluno.nome)}</Text>
          </View>
          <View style={styles.identificacao}>
            <Text style={styles.nome}>{aluno.nome}</Text>
            <Text style={styles.subtitulo}>{aluno.idade} anos  ·  Turma {aluno.turma}</Text>
          </View>
          <View style={[styles.situacaoBadge, { backgroundColor: fundoSituacao }]}>
            <Text style={[styles.situacao, { color: corSituacao }]}>
              {aprovado ? "APROVADO" : "REPROVADO"}
            </Text>
          </View>
        </View>

        <View style={styles.divisor} />

        <View style={styles.linha}>
          <View style={styles.blocoNota}>
            <Text style={styles.rotulo}>NOTA 1</Text>
            <Text style={styles.valor}>{aluno.nota1.toLocaleString("pt-BR")}</Text>
          </View>
          <View style={styles.blocoNota}>
            <Text style={styles.rotulo}>NOTA 2</Text>
            <Text style={styles.valor}>{aluno.nota2.toLocaleString("pt-BR")}</Text>
          </View>
          <View style={[styles.blocoNota, styles.blocoMedia]}>
            <Text style={styles.rotulo}>MÉDIA FINAL</Text>
            <Text style={[styles.media, { color: corSituacao }]}>
              {media.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 2 })}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

function iniciais(nome: string) {
  return nome.trim().split(/\s+/).slice(0, 2).map((parte) => parte[0]).join("").toUpperCase();
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E8ECF3",
    overflow: "hidden",
    marginBottom: 13,
    shadowColor: "#172033",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.035,
    shadowRadius: 8,
    elevation: 2,
  },
  faixa: { width: 5 },
  conteudo: { flex: 1, padding: 15 },
  cabecalho: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 43, height: 43, borderRadius: 15, backgroundColor: "#FFF1E7", alignItems: "center", justifyContent: "center", marginRight: 11 },
  avatarTexto: { color: "#C2410C", fontSize: 13, fontWeight: "900" },
  identificacao: { flex: 1 },
  nome: { fontSize: 17, fontWeight: "900", color: "#172033", letterSpacing: -0.2 },
  subtitulo: { fontSize: 11, color: "#94A3B8", marginTop: 4, fontWeight: "600" },
  situacaoBadge: { paddingHorizontal: 8, paddingVertical: 6, borderRadius: 8, marginLeft: 6 },
  situacao: { fontSize: 8, fontWeight: "900", letterSpacing: 0.5 },
  divisor: { height: 1, backgroundColor: "#F1F5F9", marginVertical: 15 },
  linha: { flexDirection: "row", alignItems: "flex-start" },
  blocoNota: { flex: 1 },
  blocoMedia: { paddingLeft: 9, borderLeftWidth: 1, borderLeftColor: "#E2E8F0" },
  rotulo: { fontSize: 9, color: "#94A3B8", fontWeight: "900", letterSpacing: 0.8 },
  valor: { fontSize: 18, fontWeight: "800", color: "#334155", marginTop: 6 },
  media: { fontSize: 18, fontWeight: "900", marginTop: 6 },
});
