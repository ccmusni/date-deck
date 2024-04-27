// @ts-nocheck

import { useState, useCallback } from 'react';
import ReactFlow, {
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow';
import 'reactflow/dist/style.css';
import dateTypes from '../constants/date-types';
import CustomNode from '../components/CustomNode';
import Product from './confetti.gif';

const nodeTypes = {
  card: CustomNode,
};

const getLabelsByIds = (options, ids) => {
  const labels = [];

  const findLabels = (opts) => {
    for (const option of opts) {
      if (ids.includes(option.id)) {
        labels.push(option.label);
      }
      if (option.options) {
        findLabels(option.options);
      }
    }
  };

  findLabels(options);
  return labels;
};

function DateCardAnswers({ answerIds }) {
  const answerLabels = getLabelsByIds(dateTypes[0].options, answerIds);
  const initialNodes = [
    ...answerLabels.map((answer, i) => ({
      id: answerIds[i],
      data: {
        id: answerIds[i],
        label: answer,
      },
      position: { x: 450 * (i + 1), y: 150 * (i + 1) },
      type: 'card',
    })),
  ];

  let initialEdges = [];

  for (let i = 0; i < initialNodes.length - 1; i++) {
    initialEdges = [
      ...initialEdges,
      {
        id: `${initialNodes[i].id}->${initialNodes[i + 1].id}`,
        source: initialNodes[i].id,
        target: initialNodes[i + 1].id,
        type: 'step',
      },
    ];
  }

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      edges={edges}
      onEdgesChange={onEdgesChange}
      fitView
    >
      <Controls />

      <div style={{ display: 'flex', height: '100%', width: '100%' }}>
        <img
          src={Product}
          width="100"
          height="50"
          alt="Confetti"
          style={{ maxWidth: '100%', height: 'auto', width: 'auto' }}
        />
      </div>
    </ReactFlow>
  );
}

export default DateCardAnswers;
