import * as S from "$data/specs.js";
import * as T from "three";

function cylinderLathe(outerR, innerR, h) {
	const halfH = h * 0.5;

	const points = [
		new T.Vector2(innerR, -halfH),
		new T.Vector2(outerR, -halfH),
		new T.Vector2(outerR, halfH),
		new T.Vector2(innerR, halfH),
		new T.Vector2(innerR, -halfH)
	];

	const g = new T.LatheGeometry(points, S.segments);

	return g;
}

function createBase() {
	const g = new T.CylinderGeometry(
		S.baseRadius,
		S.baseRadius,
		S.baseHeight,
		S.segments
	);

	const m = new T.MeshStandardMaterial({
		color: 0xff4488,
		flatShading: true
	});

	const o = new T.Mesh(g, m);
	o.position.set(0, S.baseHeight / 2, 0);
	return o;
}

function createRim() {
	const g = cylinderLathe(S.baseRadius + S.rimWidth, S.baseRadius, S.rimHeight);
	const m = new T.MeshStandardMaterial({
		color: 0xff88ff,
		flatShading: true
	});
	const o = new T.Mesh(g, m);
	o.position.set(0, S.rimHeight / 2, 0);
	return o;
}

function createSurface() {
	const g = cylinderLathe(S.surfaceRadius, S.holeRadius, S.surfaceHeight);
	const m = new T.MeshStandardMaterial({
		color: 0x4488ff,
		flatShading: true
	});
	const o = new T.Mesh(g, m);
	o.position.set(0, S.surfaceHeight / 2 + S.baseHeight, 0);
	return o;
}

function createPeg() {
	const g = new T.CylinderGeometry(
		S.pegRadius,
		S.pegRadius,
		S.pegHeight,
		S.segments / 3
	);
	const m = new T.MeshStandardMaterial({ color: 0x88ff44 });
	const o = new T.Mesh(g, m);
	return o;
}

function createPegs() {
	const pegs = new T.Group();
	for (let i = 0; i < 8; i++) {
		const angle = 3 / 8 + (i / 8) * Math.PI * 2;
		const x = Math.cos(angle) * S.innerCircleRadius;
		const z = Math.sin(angle) * S.innerCircleRadius;
		const peg = createPeg();
		peg.position.set(x, 0, z);
		pegs.add(peg);
	}
	pegs.position.set(0, S.pegHeight / 2 + S.baseHeight + S.surfaceHeight, 0);
	return pegs;
}

function createCircleLine(r) {
	const geometry = new T.CircleGeometry(r, 64);
	const edges = new T.EdgesGeometry(geometry);
	const material = new T.LineBasicMaterial({ color: 0x000000 });
	const circle = new T.LineSegments(edges, material);
	circle.rotation.x = Math.PI / 2;
	circle.position.set(0, S.baseHeight + S.surfaceHeight + S.mm, 0);
	return circle;
}

function createQuadrantLines(innerR, outerR) {
	const lines = new T.Group();
	const material = new T.LineBasicMaterial({ color: 0x000000 });
	for (let i = 0; i < 4; i++) {
		const angle = 3 / 4 + (i / 4) * Math.PI * 2;
		const x1 = Math.cos(angle) * innerR;
		const z1 = Math.sin(angle) * innerR;
		const x2 = Math.cos(angle) * outerR;
		const z2 = Math.sin(angle) * outerR;
		const geometry = new T.BufferGeometry().setFromPoints([
			new T.Vector3(x1, 0, z1),
			new T.Vector3(x2, 0, z2)
		]);
		const line = new T.Line(geometry, material);
		lines.add(line);
	}
	lines.position.set(0, S.baseHeight + S.surfaceHeight + S.mm, 0);
	return lines;
}

export default function createBoard() {
	const surface = createSurface();
	const base = createBase();
	const rim = createRim();
	const pegs = createPegs();
	const innerCircle = createCircleLine(S.innerCircleRadius);
	const middleCircle = createCircleLine(S.middleCircleRadius);
	const outerCircle = createCircleLine(S.outerCircleRadius);
	const perpendicularLines = createQuadrantLines(
		S.middleCircleRadius,
		S.outerCircleRadius
	);

	const structure = new T.Group();
	structure.add(rim);
	structure.add(base);
	structure.add(surface);
	structure.add(pegs);

	const lines = new T.Group();
	lines.add(innerCircle);
	lines.add(middleCircle);
	lines.add(outerCircle);
	lines.add(perpendicularLines);

	const board = new T.Group();
	board.add(structure);
	board.add(lines);

	return board;
}
